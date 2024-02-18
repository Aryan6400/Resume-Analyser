from rest_framework.views import exception_handler
from rest_framework.response import Response
from rest_framework import status

def error_handler(exc, context):
    # Call REST framework's default exception handler first,
    # to get the standard error response.
    response = exception_handler(exc, context)

    # If the standard exception handler does not return a response,
    # create a custom error response.
    if response is None:
        error_detail = 'Server error occurred. Please try again later.'
        response_data = {'detail': error_detail}
        response = Response(response_data, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    return response
