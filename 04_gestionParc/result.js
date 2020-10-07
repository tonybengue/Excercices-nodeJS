exports.success = function(data) {
    return {
        status: 'success',
        result: data
    };
}

exports.error = function(message) {
    return {
        status: 'error',
        message: message
    };
}