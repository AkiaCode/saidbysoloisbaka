## BASEURL
``` 
https://doujinshiman.ga/v3/api/
```

`{ Authorization: ???? }`

## Hitomi

### Proxy

hitomi/proxy/{thumbnail}

Respone
> Picture


### Integrated

hitomi/integrated/{number}

Respone
```
{
    "data": [
        {
            "status": number,
            "galleryinfo": {
                "language_localname": string,
                "language": string,
                "date": string,
                "files": [
                    {
                        "haswebp": number,
                        "hash": string,
                        "name": string,
                        "hasavif": number,
                        "width": number,
                        "height": number
                    }
                    ...
                ],
                "tags": [
                    {
                        "value": string,
                        "url": string
                    }
                    ...
                ],
                "japanese_title": string | null,
                "title": string,
                "id": "string,
                "type": string
            },
            "tags": {
                "title": string,
                "artist": [
                    {
                        "value": string,
                        "url": string
                    }
                    ...
                ],
                "group": [
                    {
                        "value": string,
                        "url": string
                    }
                    ...
                ],
                "type": {
                    "value": string,
                    "url": string
                },
                "language": {
                    "value": string,
                    "url": string
                },
                "series": [
                    {
                        "value": string,
                        "url": string
                    }
                ...
                ],
                "characters": [
                    {
                        "value": string,
                        "url": string
                    }
                ...
                ],
                "tags": [
                    {
                        "value": string,
                        "url": string
                    }
                    ...
                ]
            }
        }
    ]
}
```


### Info

hitomi/info/{number}

Respone
```
{
    "status": number,
    "title": {
        "value": string,
        "url": string
    },
    "galleryid": string,
    "thumbnail": string,
    "artist": [
        {
            "value": string,
            "url": string
        }
        ...
    ],
    "group": [
        {
            "value": string,
            "url": string
        }
        ...
    ],
    "type": {
        "value": string,
        "url": string
    },
    "language": {
        "value": string,
        "url": string
    },
    "series": [
        {
            "value": string,
            "url": string
        }
        ...
    ],
    "characters": [
        {
            "value": string,
            "url": string
        }
         ...
    ],
    "tags": [
        {
            "value": string,
            "url": string
        }
        ...
    ]
}
```


### Images

hitomi/images/{number}

Respone
```
{
    "images": [
        {
            "url": string
        }
        ...
    ]
}
```

### Galleryinfo

hitomi/galleryinfo/{number}

Respone
```
{
    "status": number,
    "language_localname": string,
    "language": string,
    "date": string,
    "files": [
        {
            "hasavif": number,
            "haswebp": number,
            "hash": string,
            "name": string,
            "height": number,
            "width": number
        }
        ...
    ],
    "tags": [
        {
            "value": string,
            "url": string
        }
        ...
    ],
    "japanese_title": string | null,
    "title": string,
    "id": string,
    "type": string
}
```

### List

hitomi/list/{number}

Respone
```
{
    "status": number,
    "list": [
        {
            "status": number,
            "title": {
                "value": string,
                "url": string
            },
            "galleryid": number,
            "thumbnail": number,
            "artist": [
                {
                    "value": string,
                    "url": string
                }
                ...
            ],
            "group": [
                {
                    "value": string,
                    "url": string
                }
                ...
            ],
            "type": {
                "value": string,
                "url": string
            },
            "language": {
                "value": string,
                "url": "string
            },
            "series": [
                {
                    "value": string,
                    "url": string
                }
                ...
            ],
            "characters": [
                {
                    "value": string,
                    "url": string
                }
                ...
            ],
            "tags": [
                {
                    "value": string,
                    "url": string
                }
                ...
            ]
        }
        ...
    ]
}
```

### Index

hitomi/index

Respone
```
[
    number,
    number
    ....
]
```

## Errors

https://doujinshiman.ga/{path}

Respones
```
{
    "status": 404,
    "message": "not_found"
}
```
or 
```
{
    "description": "Not Found",
    "status": 404,
    "message": "Requested URL {path} not found"
}
```
or 
```
{
    "status": 403,
    "message": "not_authorized"
}
```