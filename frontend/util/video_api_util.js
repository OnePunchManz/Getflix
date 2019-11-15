export const fetchVideos = () => (
    $.ajax({
        method: 'GET',
        url: 'api/video',
        data
    })
);

export const fetchVideo = id => (
    $.ajax({
        method: 'GET',
        url: `api/video/${id}`
    })
);