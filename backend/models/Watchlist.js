import mongoose from 'mongoose';
const watchlistSchema = new mongoose.Schema({ user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, symbol: { type: String, required: true }, companyName: { type: String, required: true } }, { timestamps: true });
watchlistSchema.index({ user: 1, symbol: 1 }, { unique: true });
export default mongoose.model('Watchlist', watchlistSchema);
