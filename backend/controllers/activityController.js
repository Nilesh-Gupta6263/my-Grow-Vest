import Activity from '../models/Activity.js';
export const getActivities = async (req, res, next) => { try { res.json(await Activity.find({ user: req.userId }).sort({ createdAt: -1 }).limit(30)); } catch (err) { next(err); } };
