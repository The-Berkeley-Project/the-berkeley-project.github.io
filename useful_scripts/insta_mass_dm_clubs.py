from selenium import webdriver
from selenium.common import NoSuchElementException
from selenium.webdriver.common.keys import Keys
import pandas as pd
import time
import re

### Initialize a web driver ###
options = webdriver.EdgeOptions()
driver = webdriver.Edge(options=options)

### Login to instagram ###
driver.get("https://www.instagram.com/direct")

done = False
while not done:
    try:
        email_input = driver.find_element(by="name", value="username")
        password_input = driver.find_element(by="name", value="password")
        done = True
    except NoSuchElementException:
        print("can't find inputs")
        pass

email_input.send_keys("theberkeleyproject")                       # CHANGE this value
password_input.send_keys("bpsp23!")                    # CHANGE this value
password_input.send_keys(Keys.ENTER)

done = False
while not done:
    try:
        not_now_login_info_button = driver.find_element(by="class name", value='_ac8f')
        done = True
    except NoSuchElementException:
        print("can't find not now login info button")
        pass

not_now_login_info_button.click()

done = False
while not done:
    try:
        not_now_notification_button = driver.find_element(by="class name", value='_a9_1')
        done = True
    except NoSuchElementException:
        print("can't find not now notif button")
        pass

not_now_notification_button.click()

message = ""
with open('data\mass_dm_message.txt', 'r', encoding="utf-8") as file:
    message = file.read().split('\n')

club_name_column_index = 0                       # CHANGE this value
insta_url_column_index = 3                       # CHANGE this value
club_names_and_insta_urls = pd.read_csv('data/sp23_emails.csv').iloc[:, [club_name_column_index, insta_url_column_index]].dropna()
club_names = club_names_and_insta_urls.iloc[:, 0]
club_insta_urls = club_names_and_insta_urls.iloc[:, 1]
regex_pattern = ".com/([\w*.*]*)/?"
club_insta_handles = club_insta_urls.apply(lambda url: re.sub('/', '', re.findall(regex_pattern, url)[0] if len(re.findall(regex_pattern, url)) > 0 else ""))

### Perform clicks and form inputs needed to dm each club ###
for i, account_handle in enumerate(club_insta_handles):
    first_loop = True
    while driver.current_url == "https://www.instagram.com/direct/new/" or first_loop:
        if not first_loop:
            time.sleep(3600)
        first_loop = False
        driver.get("https://www.instagram.com/direct/new/")
       
        done = False
        while not done:
            try:
                account_input_field = driver.find_element(by="name", value='queryBox')
                done = True
            except NoSuchElementException:
                print("can't find handle input for dm")
                pass

        account_input_field.send_keys(account_handle)
        time.sleep(2)
        account_input_field.send_keys(Keys.TAB)
        driver.switch_to.active_element.click()

        ### Tabbing over to and clicking the 'Next' button ###
        driver.switch_to.active_element.send_keys(Keys.SHIFT + Keys.TAB)
        driver.switch_to.active_element.send_keys(Keys.SHIFT + Keys.TAB)
        driver.switch_to.active_element.send_keys(Keys.SHIFT + Keys.TAB)
        driver.switch_to.active_element.click()


        print("waiting for redirect to new message")
        time.sleep(5)
        


    print("typing message to {}".format(club_names.iloc[i]))
    for paragraph in message:
        club_paragraph = paragraph

        ### ADD CUSTOMIZATIONS ON A PER-CLUB BASIS HERE ###
        if 'club_name' in paragraph:
            club_paragraph = re.sub('club_name', club_names.iloc[i], paragraph)

        driver.execute_script("arguments[0].value += arguments[1]", driver.switch_to.active_element, club_paragraph)
        driver.switch_to.active_element.send_keys(Keys.SHIFT, Keys.ENTER)
        driver.switch_to.active_element.send_keys(Keys.SHIFT, Keys.ENTER)

    driver.switch_to.active_element.send_keys(Keys.ENTER)
    print("message sent to {}".format(club_names.iloc[i]))

    time.sleep(150)
            