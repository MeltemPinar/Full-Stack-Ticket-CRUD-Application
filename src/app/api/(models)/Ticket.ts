import mongoose, { Schema } from "mongoose";
mongoose.connect(process.env.MONGODB_URL);
//asekron işlem ayarı
mongoose.Promise = global.Promise;
//ticket verisi için model oluştur
const ticketSchema = new Schema(
  {
    title: String,
    description: String,
    category: String,
    priority: Number,
    progress: Number,
    status: String,
    active: String,
  },
  {
    //yeni eleman oluşturduğumuzda yada güncellemede createdAt ve updatedAt bigisi tutmak için:
    timestamps: true,
  }
);
//eğer daha önce ticket modeli oluşturulmuşsaa yeniden oluşturmak yerine eskisini kullan
const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema);
export default Ticket;
