export const StatusCode = {
    // Informational Responses (100 – 199)
    CONTINUE: 100,
    SWITCHING_PROTOCOLS: 101,
    PROCESSING: 102,
    EARLY_HINTS: 103,

    // Successful Responses (200 – 299)
    SUCCESS: 200,
    CREATED: 201,
    ACCEPTED: 202,
    NON_AUTHORITATIVE_INFORMATION: 203,
    NO_CONTENT: 204,
    RESET_CONTENT: 205,
    PARTIAL_CONTENT: 206,

    // Redirection Messages (300 – 399)
    MULTIPLE_CHOICES: 300,
    MOVED_PERMANENTLY: 301,
    FOUND: 302,
    SEE_OTHER: 303,
    NOT_MODIFIED: 304,
    USE_PROXY: 305,
    TEMPORARY_REDIRECT: 307,
    PERMANENT_REDIRECT: 308,

    // Client Error Responses (400 – 499)
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    PAYMENT_REQUIRED: 402,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    METHOD_NOT_ALLOWED: 405,
    NOT_ACCEPTABLE: 406,
    PROXY_AUTHENTICATION_REQUIRED: 407,
    REQUEST_TIMEOUT: 408,
    CONFLICT: 409,
    GONE: 410,
    LENGTH_REQUIRED: 411,
    PRECONDITION_FAILED: 412,
    PAYLOAD_TOO_LARGE: 413,
    URI_TOO_LONG: 414,
    UNSUPPORTED_MEDIA_TYPE: 415,
    RANGE_NOT_SATISFIABLE: 416,
    EXPECTATION_FAILED: 417,
    IM_A_TEAPOT: 418,
    VALIDATION_ERROR: 422,
    UPGRADE_REQUIRED: 426,

    // Server Error Responses (500 – 599)
    INTERNAL_ERROR: 500,
    NOT_IMPLEMENTED: 501,
    BAD_GATEWAY: 502,
    SERVICE_UNAVAILABLE: 503,
    GATEWAY_TIMEOUT: 504,
    HTTP_VERSION_NOT_SUPPORTED: 505,
    INSUFFICIENT_STORAGE: 507,
    LOOP_DETECTED: 508,
} as const;

export const StatusMessages = {
    // Informational Responses
    CONTINUE: "Continue",
    SWITCHING_PROTOCOLS: "Switching Protocols",
    PROCESSING: "Processing",
    EARLY_HINTS: "Early Hints",

    // Successful Responses
    SUCCESS: "Successful",
    CREATED: "Resource created successfully",
    ACCEPTED: "Request accepted, processing",
    NON_AUTHORITATIVE_INFORMATION: "Non-Authoritative Information",
    NO_CONTENT: "No Content",
    RESET_CONTENT: "Reset Content",
    PARTIAL_CONTENT: "Partial Content",

    // Redirection Messages
    MULTIPLE_CHOICES: "Multiple Choices",
    MOVED_PERMANENTLY: "Resource moved permanently",
    FOUND: "Resource found at a different location",
    SEE_OTHER: "See other resource",
    NOT_MODIFIED: "Resource not modified",
    USE_PROXY: "Use Proxy",
    TEMPORARY_REDIRECT: "Temporary Redirect",
    PERMANENT_REDIRECT: "Permanent Redirect",

    // Client Error Responses
    BAD_REQUEST: "Bad Request",
    VALIDATION_ERROR: "Validation Failed",
    UNAUTHORIZED: "Unauthorized access",
    PAYMENT_REQUIRED: "Payment Required",
    FORBIDDEN: "Forbidden",
    NOT_FOUND: "Resource not found",
    METHOD_NOT_ALLOWED: "Method Not Allowed",
    NOT_ACCEPTABLE: "Not Acceptable",
    PROXY_AUTHENTICATION_REQUIRED: "Proxy Authentication Required",
    REQUEST_TIMEOUT: "Request Timeout",
    CONFLICT: "Conflict with current resource state",
    GONE: "Resource no longer available",
    LENGTH_REQUIRED: "Length Required",
    PRECONDITION_FAILED: "Precondition Failed",
    PAYLOAD_TOO_LARGE: "Payload Too Large",
    URI_TOO_LONG: "URI Too Long",
    UNSUPPORTED_MEDIA_TYPE: "Unsupported Media Type",
    RANGE_NOT_SATISFIABLE: "Range Not Satisfiable",
    EXPECTATION_FAILED: "Expectation Failed",
    IM_A_TEAPOT: "I'm a teapot",
    UPGRADE_REQUIRED: "Upgrade Required",

    // Server Error Responses
    INTERNAL_ERROR: "Internal Server Error",
    NOT_IMPLEMENTED: "Not Implemented",
    BAD_GATEWAY: "Bad Gateway",
    SERVICE_UNAVAILABLE: "Service Unavailable",
    GATEWAY_TIMEOUT: "Gateway Timeout",
    HTTP_VERSION_NOT_SUPPORTED: "HTTP Version Not Supported",
    INSUFFICIENT_STORAGE: "Insufficient Storage",
    LOOP_DETECTED: "Loop Detected",
} as const;

export const ResponseMessages = {
    // Successful Responses
    LOGIN_SUCCESS: "Logged-In successfully.",
    VIDEO_UPLOADED: "Video successfully uploaded!",
    CREATED: "Resource created successfully.",
    ACCEPTED: "Request accepted and will be processed.",

    // Client Error Responses
    INCORRECT_PASSWORD: "Incorrect password, please try again later with a different password!",
    VALIDATION_ERROR: "Validation Failed. Please check your request and try again using other credentials!",
    NOT_FOUND: "User not found. Please try again with different credentials!",
    BAD_REQUEST: "Bad request. Please verify your input and try again.",
    FORBIDDEN: "You do not have permission to access this resource.",
    UNAUTHORIZED: "Unauthorized access. Please log in and try again.",

    // Server Error Responses
    INTERNAL_ERROR: "Something went wrong on the server side. Please try again after some time!",
    SERVICE_UNAVAILABLE: "Service is currently unavailable. Please try again later.",
    GATEWAY_TIMEOUT: "The server did not receive a timely response. Please try again later.",
} as const;
