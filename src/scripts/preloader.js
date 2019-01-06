var preloaderFunc = function (arg) {
	var preloader = {
		pagePreloader : document.getElementById('preloader'),
		repositoryPreloader: document.getElementById('preloader2'),

		pagePreloading: function() {
			this.pagePreloader.classList.add('preloader-off');
		},
		repositoryOffPreloading: function() {
			this.repositoryPreloader.classList.add('preloader-off');
		},
		repositoryOnPreloading: function() {
			this.repositoryPreloader.classList.remove('preloader-off');
		}
	}
	if (arg == 0) {
		return preloader.pagePreloading();
	}
	else if (arg >0) {
		return preloader.repositoryOffPreloading();
	}
	else  {
		return preloader.repositoryOnPreloading();
	}
}
window.onload = preloaderFunc(0)
