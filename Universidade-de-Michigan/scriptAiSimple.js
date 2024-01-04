// Import TensorFlow.js library
import * as tf from '@tensorflow/tfjs';

// Define a simple model
const model = tf.sequential();
model.add(tf.layers.dense({ units: 1, inputShape: [1] }));
model.compile({ optimizer: 'sgd', loss: 'meanSquaredError' });

// Create training data
const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
const ys = tf.tensor2d([2, 4, 6, 8], [4, 1]);

// Train the model
model.fit(xs, ys, { epochs: 100 }).then(() => {
  // Make predictions
  const result = model.predict(tf.tensor2d([5], [1, 1]));
  result.print();
});
