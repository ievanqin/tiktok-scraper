export async function onRequest(context) {
  const { searchParams } = new URL(context.request.url);
  const url = searchParams.get("url");

  if (!url) {
    return new Response("❌ 缺少 url 参数", { status: 400 });
  }

  return new Response(`✅ 你传入的 TikTok 链接是：${url}`, {
    status: 200,
    headers: {
      "Content-Type": "text/plain"
    }
  });
}
