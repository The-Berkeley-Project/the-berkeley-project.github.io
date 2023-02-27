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

email_input.send_keys("theberkeleyproject")         # CHANGE this value
password_input.send_keys("bp2021")                  # CHANGE this value
password_input.send_keys(Keys.ENTER)
# time.sleep(10)                          # YOU HAVE TO PRESS THE LOG IN BUTTON ONCE THE USERNAME AND PASSWORD IS FILLED

# done = False
# while not done:
#     try:
#         login_button = driver.find_element(by="xpath", value='//*[@id="loginForm"]/div/div[3]/button')
#         done = True
#     except NoSuchElementException:
#         print("can't find log in button")
#         pass

# login_button.click()

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
with open('data/mass_dm_message.txt', 'r') as file:
    message = file.read()

paragraphs_of_message = message.split('\n')

insta_url_column_index = 3                       # CHANGE this value
club_insta_urls = pd.read_csv('data/sp23_emails.csv').iloc[:, insta_url_column_index].dropna()
regex_pattern = ".com/([\w*.*]*)/?"
club_insta_handles = club_insta_urls.apply(lambda url: re.sub('/', '', re.findall(regex_pattern, url)[0] if len(re.findall(regex_pattern, url)) > 0 else ""))

### Perform clicks and form inputs needed to dm each club ###
for account_handle in club_insta_handles:
    done = False
    while not done:
        try:
            account_input_field = driver.find_element(by="name", value='queryBox')
            done = True
        except NoSuchElementException:
            print("can't find handle input for dm")
            pass

    account_input_field.send_keys(account_handle)
    time.sleep(3)
    account_input_field.send_keys(Keys.TAB)
    time.sleep(1)
    driver.switch_to.active_element.click()

    ### Tabbing over to and clicking the next button ###
    driver.switch_to.active_element.send_keys(Keys.SHIFT + Keys.TAB)
    driver.switch_to.active_element.send_keys(Keys.SHIFT + Keys.TAB)
    driver.switch_to.active_element.send_keys(Keys.SHIFT + Keys.TAB)
    driver.switch_to.active_element.click()
    time.sleep(3)

    for paragraph in paragraphs_of_message:
        driver.switch_to.active_element.send_keys(paragraph)
        driver.switch_to.active_element.send_keys(Keys.SHIFT + Keys.ENTER)
        driver.switch_to.active_element.send_keys(Keys.SHIFT + Keys.ENTER)

    time.sleep(2)
    
    # send_button = driver.find_element(by="xpath", value='//*[@id="mount_0_0_C9"]/div/div/div/div[1]/div/div/div/div[1]/div[1]/div/div[2]/div/section/div/div/div/div/div[2]/div[2]/div/div[2]/div/div/div[3]/button')
    # send_button.click()

    driver.get("https://www.instagram.com/direct")
            