add_to_tests({
	description:"url building - music tags",
	tests: {
		"deezer album":{
			md:"<https://www.deezer.com/album/7509216>",
			bb: "[music]https://www.deezer.com/album/7509216[/music]"
		},
		"deezer track":{
			md: "<https://www.deezer.com/track/75795831>",
			bb: "[music]https://www.deezer.com/track/75795831[/music]"
		},
		"deezer playlist":{
			md: "<https://www.deezer.com/playlist/66498465>",
			bb: "[music]https://www.deezer.com/playlist/66498465[/music]"
		},
		"spotify":{
			md: "<https://play.spotify.com/track/7EE7jbv7Dv8ZkyWBlKhPXX>",
			bb: "[music]spotify:track:7EE7jbv7Dv8ZkyWBlKhPXX[/music]"
		},
		"soundcloud":{
			md: "<https://soundcloud.com/deletefile/der-dub-dream>",
			bb: "[music]https://soundcloud.com/deletefile/der-dub-dream[/music]"
		}
	}
});