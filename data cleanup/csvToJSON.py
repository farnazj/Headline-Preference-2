import csv
import json, codecs
import numpy as np

def readEarlierVersion(filename):
    already_asked = []
    with open(filename, 'r') as jsonfile:
        data = json.load(jsonfile)

        for item in data:
            already_asked.append(item['titleId'])
    
    return already_asked
        

def readCSV(filename, excludes):

    q_index = {}
    dataset = []

    with open(filename, 'r') as csvfile:
        reader = csv.reader(csvfile, delimiter = ",")
        heading = next(reader)
        
        for index, val in enumerate(heading):
            stripped_val = None
            if index == 0:
                stripped_val = 'titleId'
            elif index == 1:
                stripped_val = 'suggested'
            elif index == 9:
                stripped_val = 'original'
            else:
                stripped_val = val.strip()
                
            q_index[stripped_val] = index

        for index, row in enumerate(reader):
            throwaways = ['184', '187', '428', '806', '841', '903'] + excludes
            if row[q_index['titleId']] not in throwaways:
                if row[q_index['version']] == '1':
                    dataset.append({
                        'index': index,
                        'titleId': row[q_index['titleId']],
                        'suggested': row[q_index['suggested']],
                        'sourceId': row[q_index['SourceId']],
                        'standaloneTitleId': row[q_index['StandaloneTitleId']],
                        'original': row[q_index['original']],
                        'postId': row[q_index['PostId']],
                        'url': row[q_index['url']]
                    })
    
    # sample = np.random.choice(dataset, 30).tolist()
    return dataset


def writeAsJson(filename, dataset):
    with open(filename, 'wb') as f:
        json.dump(dataset, codecs.getwriter('utf-8')(f), ensure_ascii=False)

excludes = readEarlierVersion('output_1.json')
print('excludes', excludes)
dataset = readCSV('customTitlesAggregate.csv', excludes)
writeAsJson('output.json', dataset)