import React from 'react'
import { 
	Text,
	View
} from 'react-native'

import axios from 'axios'

export default class AlbumList extends React.Component {
	state = {
		albums: []
	}

	componentWillMount() {
		axios.get('https://rallycoding.herokuapp.com/api/music_albums')
			.then(res => this.setState({ albums: res.data }))
	}

	render() {
		const { albums } = this.state

		return (
			<View>
				{ albums.map(album => (
					<Text key={ album.title } >
						{ album.title }
					</Text>
				))}
			</View>
		)
	}
}