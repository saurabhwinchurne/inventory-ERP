import re
from flask import Blueprint, render_template

views = Blueprint('views', __name__)

@views.route('/')
@views.route('/home')
def dashboard():
    return render_template('base.html')

@views.route('/stock_analysis')
def stock_analysis():
    return render_template('stock_analysis.html', title='Stock Analysis')

@views.route('/inwards')
def inwards():
    return render_template('inwards.html', title='Inwards')

@views.route('/inwards/create')
def inwards_create():
    return render_template('inwards_create.html', title='Inwards')