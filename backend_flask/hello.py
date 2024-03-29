from flask import Flask, render_template

import pandas as pd
import xml.etree.ElementTree as et

app = Flask(__name__, static_folder="./build/static",
            template_folder="./build")

# xmlデータをパース
tree = et.parse("./record.xml")
root = tree.getroot()


@app.route('/')
def index():
    return render_template("index.html")


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
    # record単位のjsonに変換
    json = df.to_json(force_ascii=False, orient="records")

    return json


# おまじない
if __name__ == "__main__":
    app.run(debug=True)
