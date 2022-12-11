import Image from 'next/image'

export default function ProductLogo({ logo, large }) {
  const width = large ? 60 : 56
  const height = large ? 40 : 38

  return <Image src={logo} alt="logo" width={width} height={height} />
}
