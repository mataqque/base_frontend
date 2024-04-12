import Slider from 'react-slick';

import banner from '@/assets/multimedia/imagenes/home/slider-1.png';

export const SectionBanner = (): JSX.Element => {
	const settingsCards = {
		dots: false,
		arrows: false,
		infinite: true,
		centerMode: false,
		autoplay: true,
		speed: 500,
		autoplaySpeed: 6000,
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth: false,
		pauseOnHover: false,
		beforeChange: (current: any, next: any) => {},
	};
	return (
		<section className='section-banner mb-20'>
			<Slider {...settingsCards}>
				<div className='content-img'>
					<picture>
						<source srcSet={banner} media='(min-width: 500px)' />
						<img src={banner} alt='' className='h-full' />
					</picture>
				</div>
				<div className='content-img'>
					<picture>
						<source srcSet={banner} media='(min-width: 500px)' />
						<img src={banner} alt='' className='h-full' />
					</picture>
				</div>
				<div className='content-img'>
					<picture>
						<source srcSet={banner} media='(min-width: 500px)' />
						<img src={banner} alt='' className='h-full' />
					</picture>
				</div>
			</Slider>
		</section>
	);
};
