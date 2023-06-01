export async function patchNyeBolig(boligload) {
  const url = "https://wimczkvwnsepkvefdtzp.supabase.co";
  const res = await fetch(url + "/rest/v1/nyeBolig?id=eq.1", {
    method: "PATCH",
    headers: {
      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndpbWN6a3Z3bnNlcGt2ZWZkdHpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODUyNjY5NTYsImV4cCI6MjAwMDg0Mjk1Nn0.wKsEPjpUvAZEzzuau6t0gW8X5-F3kmoIvaAcoUV-BK4",
      Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndpbWN6a3Z3bnNlcGt2ZWZkdHpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODUyNjY5NTYsImV4cCI6MjAwMDg0Mjk1Nn0.wKsEPjpUvAZEzzuau6t0gW8X5-F3kmoIvaAcoUV-BK4",
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify(boligload),
  });

  return await res.json();
}
