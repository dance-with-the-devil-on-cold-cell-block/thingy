import { ImageResponse } from 'next/og'
// Route segment config
export const runtime = 'edge'
 
// Image metadata
export const alt = 'Shlist List'
export const size = {
  width: 1200,
  height: 630,
}
/* https://fonts.gstatic.com/s/lobster/v30/neILzCirqoswsqX9zoKmMw.woff2 */
export const contentType = 'image/png'

// Image generation
export default async function Image({ params }: { params: { listid: string } }) {
    const lobster = fetch(
        new URL('./Lobster-Regular.ttf', import.meta.url)
      ).then((res) => res.arrayBuffer());
    const fetchList = await fetch("http://localhost:3000/api/listitems", {
    method:"POST",
    headers: {
        "Content-Type":"application/json"
    },
    body: JSON.stringify({id:params.listid})
    });
    const swag = await fetchList.json();
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 72,
          background: 'black',
          color:'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
      <p>
        {swag.data[0][0].nameL}
        </p>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      fonts: [
        {
          name: 'Lobster',
          data: await lobster,
          style: 'normal',
          weight: 400,
        },
      ],
    }
  )
}