import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
);

function SupabaseCounter() {
  const [count, setCount] = useState(null);
  const rowId = "71825a47-55b0-412d-92fc-75c6d7dde3fc"; // your row ID

  useEffect(() => {
    // Increment on page load
    const incrementAndFetch = async () => {
      const { data } = await supabase
        .from("codefolio")
        .select("count")
        .eq("id", rowId)
        .single();

      if (data) {
        await supabase
          .from("codefolio")
          .update({ count: data.count + 1 })
          .eq("id", rowId);

        setCount(data.count + 1);
      }
    };

    incrementAndFetch();

    // Realtime subscription using v2 syntax
    const channel = supabase
      .channel("counter-channel")
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "codefolio",
          filter: `id=eq.${rowId}`,
        },
        (payload) => {
          setCount(payload.new.count);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  if (count === null) return null;

  // Convert count to array of digits
  const digits = count.toString().split("");

  return (
    <div className="flex justify-center items-center mt-4 space-x-2">
      {digits.map((digit, index) => (
        <div
          key={index}
          className="bg-[#915EFF] text-white text-2xl font-bold w-10 h-14 flex justify-center items-center rounded"
        >
          {digit}
        </div>
      ))}
    </div>
  );
}

export default SupabaseCounter;
