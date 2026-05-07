import { Outstatic } from 'outstatic'
import { OstClient } from 'outstatic/client'
import 'outstatic/outstatic.css'

export default async function OutstaticPage({ params }: { params: Promise<{ ost: string[] }> }) {
  const resolvedParams = await params
  const ostData = await Outstatic()
  return <OstClient ostData={ostData} params={resolvedParams} />
}
