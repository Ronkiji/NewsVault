import json

def your_python_function():
    data = json.loads(request.data)
    search_queries = data['searchQueries']
    for query in search_queries:
        print(query)