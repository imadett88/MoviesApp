import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { getImageFromApi } from '../API/TMDBApi';

class FilmDetails extends React.Component {
    render() {
        const film = this.props.route.params.film;

        return (
            <ScrollView style={styles.main_container}>
                <Image
                    style={styles.image}
                    source={{ uri: getImageFromApi(film.backdrop_path) }}
                />
                <Text style={styles.title_text}>{film.title}</Text>
                <Text style={styles.description_text}>{film.overview}</Text>
                <Text style={styles.date_text}>Release date: {film.release_date}</Text>
                <Text style={styles.vote_text}>Rating: {film.vote_average}</Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        padding: 10,
    },
    image: {
        width: '100%',
        height: 200,
        marginBottom: 10,
    },
    title_text: {
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 10,
    },
    description_text: {
        fontStyle: 'italic',
        fontSize: 16,
        marginBottom: 10,
    },
    date_text: {
        fontSize: 14,
        marginBottom: 10,
    },
    vote_text: {
        fontSize: 14,
        textAlign: 'right',
    },
});

export default FilmDetails;