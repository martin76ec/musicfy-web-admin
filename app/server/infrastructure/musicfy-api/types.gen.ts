// This file is auto-generated by @hey-api/openapi-ts

export type PostApiV1SongsData = {
    body: {
        id?: number;
        name?: string | unknown;
        description?: string | unknown;
        source?: string | unknown;
        softDeleted?: boolean | unknown;
        createdAt?: string;
        updatedAt?: string | unknown;
    };
    path?: never;
    query?: never;
    url: '/api/v1/songs/';
};

export type PostApiV1SongsResponses = {
    200: unknown;
};

export type GetApiV1PlaygroundData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/api/v1/playground/';
};

export type GetApiV1PlaygroundResponses = {
    200: unknown;
};

export type PostApiV1AuthLoginData = {
    body: {
        email: string;
        readonly password: string;
    };
    path?: never;
    query?: never;
    url: '/api/v1/auth/login';
};

export type PostApiV1AuthLoginResponses = {
    200: unknown;
};

export type GetApiV1DocsData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/api/v1/docs';
};

export type GetApiV1DocsResponses = {
    200: unknown;
};

export type GetApiV1DocsJsonData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/api/v1/docs/json';
};

export type GetApiV1DocsJsonResponses = {
    200: unknown;
};