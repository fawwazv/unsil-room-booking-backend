import { Request, Response, NextFunction } from 'express';
import { ApiError } from '../shared/utils/api-error';
import { ApiResponse } from '../shared/types/api-response.type';
import { ZodError } from 'zod';
import { env } from '../config/env.config';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const errorMiddleware = (err: unknown, req: Request, res: Response, next: NextFunction): void => {
  let statusCode = 500;
  let message = 'Internal Server Error';
  let errorData: unknown = undefined;

  if (err instanceof ApiError) {
    statusCode = err.statusCode;
    message = err.message;
  } else if (err instanceof ZodError) {
    statusCode = 400;
    message = 'Validation Error';
    errorData = (err as any).errors;
  } else if (err instanceof Error) {
    message = err.message;
  }

  const response: ApiResponse = {
    success: false,
    message,
    ...(errorData ? { error: errorData } : {}),
    ...(env.NODE_ENV === 'development' && err instanceof Error ? { stack: err.stack } : {}),
  };

  res.status(statusCode).json(response);
};
