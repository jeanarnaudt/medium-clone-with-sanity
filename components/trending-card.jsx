import StarIcon from '../assets/star-icon.svg'

const TrendingCard = ({ position }) => {
	return (
		<div className='trending'>
			<div className='trending__head'>
				<div className='head__index'>{position}</div>
			</div>
			<div className='trending__body'>
				<div className='author'>
					<a href='#'>
						<img
							className='author__image'
							src='https://randomuser.me/api/portraits/women/94.jpg'
							alt='Marie Owens'
						/>
					</a>
					<a href='#'>
						<h4 className='author__name'>Jessica Wildfire</h4>
					</a>
				</div>
				<a href='#'>
					<h2 className='body__title'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit non derit
						dolores pariatur at
					</h2>
				</a>
				<div className='meta'>
					<span>Feb 27</span>
					<span className='meta__dot'>·</span>
					<span>8 min read</span>
					<span className='meta__icon'>
						<StarIcon />
					</span>
				</div>
			</div>
		</div>
	)
}

export default TrendingCard
