from flask import Flask
import pandas as pd
import xml.etree.ElementTree as et

# xmlデータをパース
tree = et.parse("./record.xml")
root = tree.getroot()

app = Flask(__name__)


@app.route('/api/home')
def hello():

    # 要素取得：Xpath指定
    infomation = tree.findall("dict/dict/dict")
    song_info = []

    # infomation > song > elementでdict中の各要素に対して処理
    for song in infomation:
        song_info_dict = {}
        key = ""
        for element in song:
            if element.tag == "key":
                key = element.text
            else:
                song_info_dict[key] = element.text
        song_info.append(song_info_dict)

    df = pd.DataFrame(song_info)
    json = df.to_json(force_ascii=False)

    return json


# おまじない
if __name__ == "__main__":
    app.run(debug=True)
