import React, { use } from 'react'

const Page = ({ params }: { params: Promise<{ gameId: string }> }) => {
  const { gameId } = use(params);
  return (
    <div>Page</div>
  )
}

export default Page