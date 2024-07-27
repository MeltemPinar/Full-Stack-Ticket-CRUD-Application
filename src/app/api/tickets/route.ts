import { NextResponse } from "next/server";
import Ticket from "../(models)/Ticket";
import { Ticket as TicketType } from "@/app/types";

// yeni ticket oluştur
export async function POST(req: Request) {
  try {
    // isteğin body kısmına erişilir
    const body = await req.json();

    // veritbanına ticket ı kaydet
    const newTicket = await Ticket.create(body);

    // cevap gönder
    return NextResponse.json(
      {
        message: "Ticket oluşturuldu",
        data: newTicket,
      },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(
      {
        message: "Ticket oluşturulurken bir hata meydana geldi",
      },
      { status: 500 }
    );
  }
}

// bütün ticket ları gönder
export async function GET(req: Request) {
  try {
    const tickets: TicketType[] = await Ticket.find();

    return NextResponse.json(
      {
        tickets,
      },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(
      {
        message: "Üzgünüz bir sorun oluştu",
        err,
      },
      { status: 500 }
    );
  }
}
