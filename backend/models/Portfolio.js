import mongoose from 'mongoose';
const portfolioSchema = new mongoose.Schema({ user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, symbol: { type: String, required: true }, companyName: { type: String, required: true }, quantity: { type: Number, required: true, min: 0.01 }, buyPrice: { type: Number, required: true, min: 0 }, currentPrice: { type: Number, required: true, min: 0 } }, { timestamps: true });
export default mongoose.model('Portfolio', portfolioSchema);
