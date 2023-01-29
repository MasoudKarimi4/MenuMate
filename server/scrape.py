import requests
from bs4 import BeautifulSoup
import csv

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
addresses = []
for i in range(len(urls)):
# for i in range(0,1):
    response = requests.get(urls[i])
    soup = BeautifulSoup(response.content, 'html.parser')
    inspection = str(soup.find("div", {"class":"inspectionDescription"}).text)
    date = str(soup.find("div", {"class":"date"}).text)
    info = str(soup.find("div", {"id":"details"}))
    name = info[23:]
    address = info[info.index("<p>")+3:info.index("</p>")]
    address = address.replace("<br/>","")
    address = address.replace("\r","")
    address = address.replace("\n","")
    address = address.replace("            "," ")
    addresses.append(address)

    name = name[:name.index("</h2>")]
    name = name.replace("amp;","")
    names.append(name)
    inspection=inspection.replace("\n"," ")
    inspection=inspection.replace("\r","")
    inspection=inspection.replace("  "," ")
    inspection=inspection.replace("             "," ") 
    inspections.append(inspection)
    dates.append(date)




# with open('data.csv', 'w', newline='') as file:
#     writer = csv.writer(file)
#     for i in range(len(names)):
#         writer.writerows(names[i])

for i in range(len(names)):
        try:
            data_to_append = [
                [names[i], dates[i], inspections[i], addresses[i]]
            ]
        except IndexError:
            continue
        file = open('data.csv', 'a', newline='')
        writer = csv.writer(file)
        writer.writerows(data_to_append)
file.close()