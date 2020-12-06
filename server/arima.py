
import pandas as pd
import io
train_data = pd.read_csv('./sales_data_cs.csv')

train_data.head()

import pandas as pd
import numpy as np
from statsmodels.tsa.arima_model import ARIMA
from statsmodels.tsa.stattools import adfuller
from scipy.ndimage.interpolation import shift
from sklearn.metrics import mean_squared_error
from math import sqrt
import matplotlib
import matplotlib.pyplot as plt

productData = train_data
productData.head()

def difference(dataset, interval=1):
    diff = list()
    for i in range(interval, len(dataset)):
        value = dataset[i] - dataset[i - interval]
        diff.append(value)
    return np.array(diff)

def inverse_difference(history, yhat, interval=1):
    return yhat + history[-interval]

def describeSeries(data, label):
    fig = matplotlib.pyplot.gcf()
    fig.set_size_inches(18.5, 10.5)
    plt.plot(data, label = "Series")
    plt.plot(pd.rolling_mean(data, window = 2), '--', label = "Rolling mean")
    plt.plot(pd.rolling_std(data, 2), ":", label = "Rolling Std")
    plt.legend()
    plt.savefig(label)
    plt.clf()

def splitTrainTest(series, testSplit):
    totalData = len(series)
    trainSplit = int(totalData * (1 - testSplit))
    trainSet = series[:trainSplit]
    testSet = series[trainSplit:]
    return trainSet, testSet

trainSet, testSet = splitTrainTest(productData['vostro'], 0.3)

differencedTrainSet = difference(trainSet, 52) * 1.0

model = ARIMA(differencedTrainSet, order=(1,0,1))
model_fit = model.fit(disp = 0)
forecast = model_fit.predict(len(differencedTrainSet), len(differencedTrainSet) + len(testSet))
#print(model)
#print(model_fit)


yPrediction = []
history = list(trainSet)
for f in forecast:
   yPredict = inverse_difference(history, f, 52)
   yPrediction.append(yPredict)
   history.append(yPredict)

print(yPrediction)



