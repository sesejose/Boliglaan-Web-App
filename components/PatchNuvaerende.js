export async function patchNuvaerendeBolig(payload) {
  const url = "https://wimczkvwnsepkvefdtzp.supabase.co";
  const res = await fetch(url + "/rest/v1/nuvaerendeBolig?id=eq.1", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndpbWN6a3Z3bnNlcGt2ZWZkdHpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODUyNjY5NTYsImV4cCI6MjAwMDg0Mjk1Nn0.wKsEPjpUvAZEzzuau6t0gW8X5-F3kmoIvaAcoUV-BK4",
      Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndpbWN6a3Z3bnNlcGt2ZWZkdHpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODUyNjY5NTYsImV4cCI6MjAwMDg0Mjk1Nn0.wKsEPjpUvAZEzzuau6t0gW8X5-F3kmoIvaAcoUV-BK4",
      Prefer: "return=minimal",
    },
    body: JSON.stringify(payload),
  });

  return await res.json();
}
