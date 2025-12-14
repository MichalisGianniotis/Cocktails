import cocktails from '@/data/cocktails'

const PreLoadImages = () => {
    const firstThree = cocktails.slice(0, 3);

  return (
    <>
        {firstThree.map(cocktail => (

                <link
                    key={cocktail.id}
                    rel='preload'
                    as='image'
                    href={cocktail.image}
                />
        ))}
    </>
  )
}

export default PreLoadImages
