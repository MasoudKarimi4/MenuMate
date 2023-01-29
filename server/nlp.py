import cohere; 
co = cohere.Client('5wlBlVCWE3eU6jZGIjrwiT6GIPW2jgytjtHdfr93')


restaurant = '3brothers shawarma and poutine'

prompt = 'Write about '+restaurant+", an Ottawa restaurant."

response = co.generate( 
    model='command-xlarge-nightly', 
    prompt = prompt,
    max_tokens=150, 
    temperature=0.8,
    stop_sequences=["--"])

summary = response.generations[0].text



