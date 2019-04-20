class Carousel {
	constructor (element) {
		this.element = element;

		this.slides = [...this.element.querySelectorAll('img')]
			.map(e => new Panel(e));
		
		this.currSlide = 0;
		this.slides[this.currSlide].select();

		this.element.querySelector('.left-button')
			.addEventListener('click', () => this.slide('left'));
		this.element.querySelector('.right-button')
			.addEventListener('click', () => this.slide('right'));

		console.log(this);
	}

	slide = (dir) => {
		console.log(dir)
		let next;
		switch (dir) {
			case 'left': 
				next = this.currSlide == 0 ? this.slides.length - 1 : this.currSlide - 1 ;
				break;
			case 'right': 
				next = this.currSlide == this.slides.length - 1 ? 0 : this.currSlide + 1;
				break;
			default:
				console.log('Carousel.slide called with invalid direction');
		}
		this.slides[this.currSlide].deselect();
		this.slides[next].select();

		this.currSlide = next;
	}
}

class Panel {
	constructor (element) {
		this.element = element;
	}

	select () {
		this.element.style.cssText = 'display: initial'; 
	}

	deselect () {
		this.element.style.cssText = 'display: none';
	}
}

let carousel = new Carousel(document.querySelector('.carousel'));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
