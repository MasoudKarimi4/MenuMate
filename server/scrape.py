import requests
from bs4 import BeautifulSoup

url = "https://inspections.ottawapublichealth.ca/en/Home/Search?CategoryId=38d803d4-263d-46c7-924e-9cdce09438e2"


response = requests.get(url)


soup = BeautifulSoup(response.content, 'html.parser')


table = soup.find("div", {"class":"scrollbar-inner"})

links=table.find_all('a')
urls=[]

#creates lists of the urls found on the webpage for each food place
for link in links:
    link = str(link)
    link="https://inspections.ottawapublichealth.ca/"+link[9:61]

    urls.append(link)
    

#scrapes each url for the inspection date and information
inspections = []
dates = []
names= []
for i in range(len(urls)):
    response = requests.get(urls[i])
    soup = BeautifulSoup(response.content, 'html.parser')
    inspection = str(soup.find("div", {"class":"inspectionDescription"}).text)
    date = str(soup.find("div", {"class":"date"}).text)
    name = str(soup.find("div", {"id":"details"}).text)
    inspections.append(inspection)
    dates.append(date)

print(inspections)

print(dates)