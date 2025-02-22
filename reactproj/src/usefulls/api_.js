import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const HF_API_KEY = 'your_hugging_face_api_key_here';
const API_URL = 'https://api-inference.huggingface.co/models/distilbert-base-uncased-finetuned-sst-2-english';

const SentimentAnalysis = () => {
  const [text, setText] = useState('');
  const [sentiment, setSentiment] = useState('');

  const analyzeSentiment = async () => {
    try {
      const response = await axios.post(
        API_URL,
        { inputs: text },
        { headers: { Authorization: `Bearer ${HF_API_KEY}` } }
      );
      if (response.data && response.data.length > 0) {
        setSentiment(response.data[0].label); 
      }
    } catch (error) {
      console.error('Error fetching sentiment:', error);
      setSentiment('Error analyzing sentiment');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sentiment Analysis</Text>
      <TextInput
        style={styles.input}
        placeholder="Type your thoughts..."
        value={text}
        onChangeText={setText}
      />
      <Button title="Analyze Sentiment" onPress={analyzeSentiment} />
      {sentiment !== '' && <Text style={styles.result}>Sentiment: {sentiment}</Text>}
    </View>
  );
};

export default SentimentAnalysis;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
  result: { marginTop: 10, fontSize: 18, fontWeight: 'bold', textAlign: 'center' },
});
