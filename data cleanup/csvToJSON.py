import csv
import json, codecs

def readCSV(filename):

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

        print(q_index)

        for index, row in enumerate(reader):
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
    
    return dataset


def writeAsJson(filename, dataset):
    with open(filename, 'wb') as f:
        json.dump(dataset, codecs.getwriter('utf-8')(f), ensure_ascii=False)

dataset = readCSV('customTitlesAggregate.csv')
writeAsJson('test.json', dataset)