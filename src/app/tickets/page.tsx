import Link from "next/link";

import { ticketPath } from "@/paths";

import { tickets } from "../../data";


function Tickets() {
  return (
    <div className="p-4">
      <h1>Tickets</h1>
      {tickets.map((ticket)=>{
        return(
            <div key={ticket.ticketID} className="flex justify-between items-center border border-gray-700 p-4 rounded-md mb-3">
            <div className="flex items-center gap-2">
            <p className="text-2xl text-gray-400">{ticket.title}</p>
            <span className="text-xs bg-yellow-200 text-black uppercase font-semibold p-1 rounded">{ticket.status}</span>
            </div>
            <Link href={ticketPath(ticket.ticketID)}>View</Link>
            </div>
        )
      })}
    </div>
  );
}

export default Tickets;
