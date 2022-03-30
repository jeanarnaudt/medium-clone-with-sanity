import Link from 'next/link'

const HeaderHero = () => {
	return (
		<section className='hero'>
			<div className='container'>
				<div
					className='hero__wrapper'
					style={{
						backgroundImage: `url(https://miro.medium.com/max/698/4*BIK9VGjeCj2TaTDw4id2nA.png)`,
					}}
				>
					<div className='hero__content'>
						<h2 className='content__title'>Stay curious.</h2>
						<h3 className='content__text'>
							Discover stories, thinking, and expertise from writers on any
							topic.
						</h3>
						<Link href='#'>
							<button className='btn btn--black'>Start reading</button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}

export default HeaderHero
