const handleError = (res, message = "", status = 403 ) => {
    res.status(status);
    res.send({error : message})
}

module.exports = { handleError }