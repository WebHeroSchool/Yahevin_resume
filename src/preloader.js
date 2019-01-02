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
window.onload = preloader.pagePreloading ();
