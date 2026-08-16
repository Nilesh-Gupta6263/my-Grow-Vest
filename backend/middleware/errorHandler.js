export const notFound = (req, res) => res.status(404).json({ message: `Route not found: ${req.method} ${req.originalUrl}` });
export const errorHandler = (err, req, res, next) => { console.error(err); const status = err.name === 'CastError' ? 400 : err.status || 500; res.status(status).json({ message: status === 500 ? 'An unexpected server error occurred.' : err.message }); };
