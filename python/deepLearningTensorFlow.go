import random
import input_data
mnist = input_data.read_data_sets(raw_input(), raw_input(), raw_input())

import tensorflow as tf

x = tf.placeholder(tf.float32, [None, 784])
W = tf.Variable(tf.zeros([784, 10]))
b = tf.Variable(tf.zeros([10]))
y = tf.nn.softmax(tf.matmul(x, W) + b)
y_ = tf.placeholder(tf.float32, [None, 10])

cross_entropy = tf.reduce_mean(-tf.reduce_sum(y_ * tf.log(y), reduction_indices=[1]))
train_step = tf.train.GradientDescentOptimizer(0.5).minimize(cross_entropy)

init = tf.initialize_all_variables()

with tf.Session() as sess:
  sess.run(init)
  # Added more learning iterations for an accuracy 92.9% max
  for i in range(5000):
    batch_xs, batch_ys = mnist.train.next_batch(100)
    sess.run(train_step, feed_dict={x: batch_xs, y_: batch_ys})

  result = sess.run(tf.argmax(y,1), feed_dict={x: mnist.test.images})
  print ' '.join(map(str, result))
