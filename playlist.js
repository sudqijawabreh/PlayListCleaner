const videos = document.querySelectorAll("ytd-playlist-video-renderer");

for (const video of videos) {
	const deleteButton = document.createElement("button")
	deleteButton.innerHTML = `x`;
	deleteButton.style = "margin-top: -48px; margin-right: -29px; margin-left: 4px; z-index: 10; cursor: pointer";
	video.prepend(deleteButton);

	deleteButton.addEventListener("click", () => {
		video.querySelector(`button[aria-label="Action menu"]`).click();
		setTimeout(() => {
		    document.querySelector("ytd-menu-service-item-renderer yt-formatted-string span").click()
		}, 10);
	});
}
