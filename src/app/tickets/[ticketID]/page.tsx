import { tickets } from "@/data";

type TicketPapeProps = {
  params: {
    ticketID: string;
  };
};

function TicketPape({ params }: TicketPapeProps) {
  const ticket = tickets.find((ticket) => ticket.ticketID === params.ticketID);

    if(!ticket){
        return(<h2>No ticket here..</h2>)
    }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold">{ticket?.title}</h1>
      <p>{ticket?.description}</p>
      <span>{ticket?.assignedTo}</span>
    </div>
  );
}

export default TicketPape;
