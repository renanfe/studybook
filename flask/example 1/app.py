from flask import  Flask, render_template
from src.club import Club

DEBUG = True
app = Flask(__name__);

@app.route('/', methods=['GET'])
def hello_world():
  return render_template('index.html', name='Renan')

@app.errorhandler(404)
def not_found_error(error):
  return render_template('404.html'), 404

@app.errorhandler(500)
def internal_error(error):
    return render_template('500.html'), 500

if __name__ == '__main__':
  app.run()
