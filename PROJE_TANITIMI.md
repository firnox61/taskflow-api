# TaskFlow — Proje Tanıtımı

## Projenin amacı

TaskFlow, bir yazılım ekibinin görevlerini tek bir sistem üzerinden takip etmesini sağlayan REST API projesidir. Proje, Node.js ve Express.js ile geliştirilmiştir.

## Senaryo

Bir yazılım şirketi, ekip üyelerine atadığı görevleri ve bu görevlerin durumlarını takip etmek istemektedir. TaskFlow API üzerinden görev oluşturabilir, mevcut görevleri listeleyebilir, bir görevin ayrıntılarını görüntüleyebilir, görev bilgilerini güncelleyebilir ve görevleri silebilir.

## Görev bilgileri

Her görev aşağıdaki alanları içerir:

- `id`: Göreve ait benzersiz kimlik
- `title`: Görev başlığı
- `description`: Görev açıklaması
- `assignee`: Sorumlu çalışan
- `project`: Bağlı proje
- `status`: Görev durumu (`todo`, `in-progress` veya `done`)
- `priority`: Görev önceliği (`low`, `medium` veya `high`)
- `createdAt`: Oluşturulma zamanı
- `updatedAt`: Son güncellenme zamanı

## API tasarımı

| Yöntem | Endpoint | Açıklama |
|---|---|---|
| GET | `/` | API’nin çalıştığını bildirir |
| GET | `/api/tasks` | Tüm görevleri listeler |
| POST | `/api/tasks` | Yeni görev oluşturur |
| GET | `/api/tasks/:id` | Belirli bir görevi getirir |
| PUT | `/api/tasks/:id` | Belirli bir görevi günceller |
| DELETE | `/api/tasks/:id` | Belirli bir görevi siler |

## Teknik yapı

- **Node.js:** JavaScript çalışma ortamı
- **Express.js:** HTTP sunucusu ve API yönlendirmeleri
- **Görev saklama:** Sunucu belleğinde dizi; sunucu yeniden başlatıldığında veriler sıfırlanır
- **Logger middleware’i:** Her isteğin zamanı, HTTP yöntemi ve adresini terminale yazar

## Kapsam

Proje, eğitim teslimi için zorunlu görev CRUD işlemlerini ve temel logger middleware’ini içerir. Filtreleme, arama, sayfalama, raporlama ve gelişmiş validation kapsam dışıdır.